<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\EmailStoreRequest;

class FrontController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Front/Index', [
            "qas" => config("app.qas")
        ]);
    }

    public function store(EmailStoreRequest $request)
    {
        User::create([
            'first_name' => $request->get("first_name"),
            "email" => $request->get("email"),
            "owner" => 0
        ]);

        return Redirect::back()->with('success', 'Berhasil.');
    }
}
