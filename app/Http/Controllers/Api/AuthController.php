<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\RegisterRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\Customer;
use App\Models\User;
use DB;
use Exception;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        DB::beginTransaction();
        try {
            $user = new User();
            $user->name = $request->name;
            $user->phone = $request->phone;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();

            if (!$user->id) {
                throw new Exception('Error al crear el usuario');
            }

            $token = $user->createToken('auth_token')->plainTextToken;

            $customer = new Customer();
            $customer->name = $request->name;
            $customer->phone = $request->phone;
            $customer->country_id = $request->country_id;
            $customer->state_id = $request->state_id;
            $customer->document_type = $request->document_type;
            $customer->document_number = $request->document_number;
            $customer->email = $request->email;
            $customer->address = $request->address;
            $customer->occupation = $request->occupation;
            $customer->politically_exposed = $request->politically_exposed;
            $customer->user_id = $user->id;
            $customer->save();

            if (!$customer->id) {
                throw new Exception('Error al crear el cliente');
            }

            DB::commit();

            return response()->json([
                'user' => $user,
                'access_token' => $token,
                'token_type' => 'Bearer'
            ]);
        } catch (Exception $err) {
            DB::rollBack();
            return response()->json(['message' => $err->getMessage()], 500);
        }
    }

    public function login(LoginRequest $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Credenciales incorrectas'], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        unset($user->id);
        unset($user->created_at);
        unset($user->updated_at);
        unset($user->email_verified_at);

        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer'
        ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json(['message' => 'tokens revoked']);
    }
}
