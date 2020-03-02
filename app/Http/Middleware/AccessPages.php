<?php

namespace App\Http\Middleware;

use Closure;

class AccessPages
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(auth()->guest()) {
            return redirect('/login')->withErrors([
                'email' => "You must be logged in to view this page !"

            ]);
        }
        return view('welcome');
    }
}
