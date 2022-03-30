<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VerificationController extends Controller
{
    /**
     * @OA\GET(
     * path="/api/email/verify/{id}",
     * summary="Verification link",
     * description="Link from verification mail",
     * tags={"auth"},
     * @OA\RequestBody(
     *    required=true,
     * ),
     * @OA\Response(
     *    response=200,
     *    description="Верифицирован",
     * ),
     * @OA\Response(
     *    response=401,
     *    description="Ключ не действует",
     *    @OA\JsonContent(
     *       @OA\Property(property="message", type="string", example="Ключ не действует")
     *        )
     *     )
     * )
     * @param $user_id
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function verify($user_id, Request $request) {
        if (! $request->hasValidSignature()) {
            return response()->json([
                'message' => 'Ключ не действует!'
            ], 401);

        }

        $user = User::findOrFail($user_id);

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }
        return response()->json([
            'message' => 'Верифицирован!'
        ], 200);

    }

    /**
     * @OA\GET(
     * path="/api/email/resend",
     * summary="Resend verification link",
     * description="Resend verification mail notification",
     * operationId="authResend",
     * tags={"auth"},
     * @OA\RequestBody(
     *    required=true,
     *    description="Введите данные",
     *    @OA\JsonContent(
     *       required={"email"},
     *       @OA\Property(property="email", type="string", format="email", example="rusktl97@gmail.com"),
     *    ),
     * ),
     * @OA\Response(
     *    response=200,
     *    description="На почту отправлено письмо",
     * ),
     * @OA\Response(
     *    response=401,
     *    description="Уже верифицирован",
     *    @OA\JsonContent(
     *       @OA\Property(property="message", type="string", example="Уже верифицирован")
     *        )
     *     )
     * )
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function resend(Request $request)
    {
        $email = $request->email;
        $user = User::where('email',$email)->first();
        if ($user->email_verified_at) {
            return response()->json([
                'message' => 'Уже верифицирован!'
            ], 401);
        }

        $user->sendEmailVerificationNotification();

        return response()->json([
            'message' => 'На почту отправлено письмо!'
        ], 200);
    }

}
