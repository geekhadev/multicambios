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
        Schema::create('exchanges', function (Blueprint $table) {
            $table->id();
            $table->foreignId('country_origin_id')->constrained()->references('id')->on('countries');
            $table->foreignId('country_destination_id')->constrained()->references('id')->on('countries');
            $table->decimal('amount_min', 10, 2);
            $table->decimal('amount_max', 10, 2);
            $table->decimal('amount_preferential', 10, 2);
            $table->foreignId('bank_origin_id')->constrained()->references('id')->on('banks');
            $table->string('bank_origin_account_number');
            $table->enum('bank_origin_account_type',
                ['Corriente', 'Ahorro', 'Vista/RUT']
            );
            $table->enum('bank_origin_owner_document_type',
                ['Cédula', 'DNI', 'Pasaporte', 'RUT']
            );
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
