<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\DirectoryList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function me()
    {
        $user = Auth::user();
        $user->load('company.company','roles');
        return response()->json(['message'=>'success','data'=>$user],200);
    }
    public function directory_list()
    {
        $lists = DirectoryList::all();
        return response()->json($lists,200);
    }
}
