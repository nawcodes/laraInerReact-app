<?php

use App\Http\Controllers\TodoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/todo', [TodoController::class, 'index'])->name('todo.index');
Route::post('/todo', [TodoController::class, 'insert'])->name('todo.insert');
Route::post('/todo/{todo}', [TodoController::class, 'update'])->name('todo.update');
Route::post('/todo/{todo}/remove', [TodoController::class, 'destroy'])->name('todo.destroy');

Route::get('/todo-list', [TodoController::class, 'todoList']);
