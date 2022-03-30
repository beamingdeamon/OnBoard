<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\VerificationController;
use App\Http\Controllers\Api\Admin\UsersController;
use App\Http\Controllers\Api\Admin\CompaniesController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\Admin\Directories\RolesController;
use App\Http\Controllers\Api\HRD\CompanyController;
use App\Http\Controllers\Api\HRD\StagesController;
use App\Http\Controllers\Api\HRD\UsersController as HrdUsersController;
use App\Http\Controllers\Api\HRD\StructuresController as HrdStructuresController;
use App\Http\Controllers\Api\Manager\HomeController as ManagerController;
use App\Http\Controllers\Api\Manager\VacanciesController;
use App\Http\Controllers\Api\Manager\DocumentsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/email/verify/{id}', [VerificationController::class, 'verify'])->name('verification.verify');
Route::post('/email/resend', [VerificationController::class, 'resend'])->name('verification.resend');
Route::get('/me', [HomeController::class, 'me'])->name('me')->middleware('auth:sanctum');

Route::group(['prefix' => 'v1/admin','as' => 'api.','namespace' => 'Api\V1\Admin','middleware' => ['auth:sanctum']], function () {
    Route::group(['prefix'=>'/users'],function () {
        Route::get('/', [UsersController::class,'index']);
        Route::get('/{id}', [UsersController::class,'show']);
        Route::post('/store', [UsersController::class,'store']);
        Route::post('/update/{id}', [UsersController::class,'update']);
        Route::post('/delete/{id}', [UsersController::class,'destroy']);
    });

    Route::group(['prefix'=>'/companies'],function (){
        Route::get('/', [CompaniesController::class,'index']);
        Route::post('/verify/{id}', [CompaniesController::class,'verify']);
        Route::post('/deny/{id}', [CompaniesController::class,'deny']);
    });
});
Route::group(['prefix' => 'v1/admin/directories','as' => 'api.','middleware' => ['auth:sanctum']], function () {
    Route::get('/list', [HomeController::class,'directory_list']);
    Route::get('/roles', [RolesController::class,'index']);
    Route::apiResource('countries', 'App\Http\Controllers\Api\Admin\Directories\CountriesController', ['except' => ['create', 'edit']]);
    Route::apiResource('directions', 'App\Http\Controllers\Api\Admin\Directories\DirectionsController', ['except' => ['create', 'edit']]);
    Route::apiResource('education-levels', 'App\Http\Controllers\Api\Admin\Directories\EducationLevelsController', ['except' => ['create', 'edit']]);
    Route::apiResource('employment-types', 'App\Http\Controllers\Api\Admin\Directories\EmploymentTypesController', ['except' => ['create', 'edit']]);
    Route::apiResource('languages', 'App\Http\Controllers\Api\Admin\Directories\LanguagesController', ['except' => ['create', 'edit']]);
    Route::apiResource('schedules', 'App\Http\Controllers\Api\Admin\Directories\SchedulesController', ['except' => ['create', 'edit']]);
    Route::apiResource('search-reasons', 'App\Http\Controllers\Api\Admin\Directories\SearchReasonsController', ['except' => ['create', 'edit']]);
    Route::apiResource('work-experiences', 'App\Http\Controllers\Api\Admin\Directories\WorkExperiencesController', ['except' => ['create', 'edit']]);
    Route::apiResource('work-modes', 'App\Http\Controllers\Api\Admin\Directories\WorkModesController', ['except' => ['create', 'edit']]);
    Route::apiResource('cities', 'App\Http\Controllers\Api\Admin\Directories\CitiesController', ['except' => ['create', 'edit']]);
    Route::apiResource('structures', 'App\Http\Controllers\Api\Admin\Directories\StructuresController', ['except' => ['create', 'edit']]);
    Route::apiResource('contact-types', 'App\Http\Controllers\Api\Admin\Directories\ContactTypesController', ['except' => ['create', 'edit']]);
});
Route::group(['prefix' => 'v1/hrd','as' => 'api.hrd.','namespace' => 'Api\V1\HRD','middleware' => ['auth:sanctum']], function () {
    Route::get('/', [CompanyController::class,'index']);
    Route::post('/set-detail', [CompanyController::class,'setDetails']);
    Route::post('/users/massStore', [HrdUsersController::class,'massStore']);
    Route::post('/users/emailStore', [HrdUsersController::class,'emailStore']);
    Route::apiResource('users', '\App\Http\Controllers\Api\HRD\UsersController', ['except' => ['create', 'edit']]);
    Route::apiResource('structures', '\App\Http\Controllers\Api\HRD\StructuresController', ['except' => ['create', 'edit']]);
    Route::apiResource('stages', '\App\Http\Controllers\Api\HRD\StagesController', ['except' => ['create', 'edit']]);
    Route::apiResource('mail_templates', '\App\Http\Controllers\Api\HRD\MailTemplatesController', ['except' => ['create', 'edit']]);
    Route::apiResource('positions', '\App\Http\Controllers\Api\HRD\PositionsController', ['except' => ['create', 'edit']]);
    Route::post('/structures/setUsers',[HrdStructuresController::class,'setUsers']);
    Route::post('/structures/deleteUser/{id}',[HrdStructuresController::class,'deleteUser']);
    Route::post('/stages/setUsers',[StagesController::class,'setUsers']);
    Route::post('/stages/deleteUser/{id}',[StagesController::class,'deleteUser']);
});
Route::group(['prefix' => 'v1/manager','as' => 'api.manager.','namespace' => 'Api\V1\Manager','middleware' => ['auth:sanctum']], function () {
    Route::get('/', [ManagerController::class,'index']);
    Route::post('/profile_update', [ManagerController::class,'profile_update']);
    Route::post('/delete_profile', [ManagerController::class,'delete_profile']);
    Route::apiResource('vacancies', '\App\Http\Controllers\Api\Manager\VacanciesController', ['except' => ['create', 'edit']]);
    Route::apiResource('users', '\App\Http\Controllers\Api\Manager\UsersController', ['except' => ['create', 'edit']]);
    Route::apiResource('positions', '\App\Http\Controllers\Api\Manager\PositionsController', ['except' => ['create', 'edit']]);
    Route::apiResource('documents', '\App\Http\Controllers\Api\Manager\DocumentsController', ['except' => ['create', 'edit','update']]);
    Route::post('/documents/download/{id}',[DocumentsController::class,'download']);
    Route::post('/vacancies/duplicate/{id}', [VacanciesController::class,'duplicate']);
});
