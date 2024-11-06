<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $amount_integer = config('multicambios.amount_integer');
        $amount_decimal = config('multicambios.amount_decimal');

        Schema::create('exchanges', function (Blueprint $table) use ($amount_integer, $amount_decimal) {
            $table->id();
            $table->foreignId('country_origin_id')->constrained()->references('id')->on('countries');
            $table->foreignId('country_destination_id')->constrained()->references('id')->on('countries');
            $table->decimal('amount_min', $amount_integer, $amount_decimal);
            $table->decimal('amount_max', $amount_integer, $amount_decimal);
            $table->decimal('amount_preferential', $amount_integer, $amount_decimal);
            $table->foreignId('bank_origin_id')->constrained()->references('id')->on('banks');
            $table->foreignId('bank_origin_account_type_id')->constrained('account_types');
            $table->string('bank_origin_account_number');
            $table->foreignId('bank_origin_owner_document_type_id')->constrained('document_types');
            $table->string('bank_origin_owner_document_number');
            $table->string('bank_origin_owner_name');
            $table->string('bank_origin_owner_phone');
            $table->string('bank_origin_owner_email');
            $table->json('banks_destinations_ids');
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exchanges');
    }
};
