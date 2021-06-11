<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class TransactionController extends Controller
{
    public function index()
    {
        return Inertia::render('Transaction/Index', [
            'filters' => Request::all('search'),
            'transactions' => []
        ]);
    }

}
