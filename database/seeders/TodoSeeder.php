<?php

namespace Database\Seeders;

use App\Models\Todo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i=0; $i < 50 ; $i++) {
             Todo::create([
                'title' => 'Todo ' . $i,
                'description' => 'Description ' . $i,
                'duedate' => '2023-03-08',
                'priority' => 'high'

             ]);
        }
    }
}
