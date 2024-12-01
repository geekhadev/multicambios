<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;

class PageController extends Controller
{
    public function index()
    {
        $pages = [];

        $files = File::files(public_path('documents'));

        foreach ($files as $file) {
            if ($file->getExtension() === 'md') {
                $name = str_replace(".md", "", $file->getFilename());
                $pages[$name] = File::get($file->getRealPath());
            }
        }

        return response()->json($pages);
    }
}
