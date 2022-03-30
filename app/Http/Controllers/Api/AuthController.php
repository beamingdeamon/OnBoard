<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\Company;
use App\Models\CompanyUser;
use App\Models\User;
use App\Models\UserDetail;
use App\Notifications\WelcomeNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->all();
        $user = User::create($data);
//        $user->sendEmailVerificationNotification();
        $user->roles()->sync(2);

        $data['user_id']    =   $user->id;
        $company = Company::create($data);
        $data['company_id'] = $company->id;
        $company_user = CompanyUser::create($data);
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'success',
        ],200);
    }

    public function login(LoginRequest $request)
    {
        $data = $request->all();
        if (!Auth::attempt($data)) {
            return response()->json([
                'message' => 'Данные не совпадают'
            ], 401);
        }

        $user = User::where('email', $data['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ],200);
    }

}
