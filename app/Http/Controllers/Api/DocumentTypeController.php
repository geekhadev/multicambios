<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DocumentType;

class DocumentTypeController extends Controller
{
    public function index()
    {
        $documentTypes = DocumentType::get();

        return response()->json($documentTypes);
    }
}
