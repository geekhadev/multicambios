<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('benefits', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignId('customer_id');
            $table->foreignId('country_id')->constrained('countries');
            $table->foreignId('document_type_id')->constrained('document_types');
            $table->string('document_number');
            $table->string('name');
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->foreignId('bank_id')->constrained('banks');
            $table->foreignId('bank_account_type_id')->constrained('account_types');
            $table->string('bank_account_number');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('benefits');
    }
};
