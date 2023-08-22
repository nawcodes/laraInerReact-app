<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function index()
    {
        
        $todos = Todo::paginate(4);
        return Inertia::render('Todo/Index', compact('todos'));
    }

    public function insert(Request $request)
    {
        try {
            Todo::create($request->all());
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage()
            ]);
        }
    }

    public function destroy(Todo $todo, Request $request)
    {
        try {
            $todo->delete();
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage()
            ]);
        }
    }


    public function update(Todo $todo, Request $request)
    {
        try {
            $todo->title = $request->title;
            $todo->description = $request->description;
            $todo->duedate = $request->duedate;
            $todo->priority = $request->priority;
            $todo->save();
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage()
            ]);
        }
    }

    public function todoList() {
        $todo = Todo::paginate(4);
        return response()->json($todo);
    }
}
