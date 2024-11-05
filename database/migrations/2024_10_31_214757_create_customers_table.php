<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->enum('document_type', ['passport', 'id'])->default('id');
            $table->string('document_number');
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->foreignId('country_id')->constrained('countries');
            $table->foreignId('state_id')->constrained('states');
            $table->text('address')->nullable();
            $table->string('occupation')->nullable();
            $table->boolean('politically_exposed')->default(false);
            $table->boolean('is_confirmed')->default(false);
            $table->boolean('is_active')->default(true);
            $table->foreignId('confirmed_by')->nullable()->constrained('users');
            $table->timestamp('confirmed_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
