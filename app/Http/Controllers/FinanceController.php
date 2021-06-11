<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class FinanceController extends Controller
{
    public function index()
    {
        return Inertia::render('Finance/Index', [
            'filters' => Request::all('search'),
            'finance' => []
        ]);
    }

}
