<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function index() {
        $todo = Todo::paginate(4);
        return Inertia('Todo/Index', compact('todo'));

    }
}
