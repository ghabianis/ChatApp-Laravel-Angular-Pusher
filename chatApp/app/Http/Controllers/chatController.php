<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\Message;
class chatController extends Controller
{
    public function message(Request $request){

       event(new Message($request->input('message')));

        return [];
    }
}
