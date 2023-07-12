<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function index() {
        return Inertia('Todo/Index', [
            'todo' => Todo::latest()->get(),
        ]);

    }
}
