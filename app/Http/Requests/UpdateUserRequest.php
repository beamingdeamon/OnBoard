<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => [
                'string',
                'required',
            ],
            'surname' => [
                'string',
                'required',
            ],
            'phone' => [
                'required',
            ],
            'email' => [
                'required',
                'string',
                'email',
                Rule::unique('users')->ignore($this->id, 'id')
            ],
            'password' => [
                'required',
                'string',
                'min:8',
            ],
            'role_id'   =>  [
                'required'
            ]
        ];

    }
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(['errors' => $validator->errors()], \Symfony\Component\HttpFoundation\Response::HTTP_BAD_REQUEST));
    }
}
