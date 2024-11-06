<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        $amount_integer = config('multicambios.amount_integer');
        $amount_decimal = config('multicambios.amount_decimal');
        $transaction_statuses = config('multicambios.transaction_statuses');

        Schema::create('transactions', function (Blueprint $table) use ($amount_integer, $amount_decimal, $transaction_statuses) {
            $table->uuid('id')->primary();
            $table->foreignId('customer_id')->constrained();
            $table->foreignId('exchange_id')->constrained();

            $table->enum('rate_type', ['general', 'preference', 'custom'])->default('general');
            $table->decimal('rate_amount', $amount_integer, $amount_decimal);

            $table->foreignId('send_payment_method_id')->constrained('payment_methods');
            $table->string('send_bank');
            $table->string('send_hour');
            $table->string('send_number');
            $table->decimal('send_amount', $amount_integer, $amount_decimal);
            $table->string('send_description')->nullable();
            $table->text('send_photo');

            $table->foreignId('pay_payment_method_id')->constrained('payment_methods');
            $table->string('pay_bank')->nullable();
            $table->string('pay_hour')->nullable();
            $table->string('pay_number')->nullable();
            $table->decimal('pay_amount', $amount_integer, $amount_decimal)->nullable();
            $table->string('pay_description')->nullable();
            $table->text('pay_photo')->nullable();

            $table->string('receive_bank')->nullable();

            $table->foreignId('customer_document_type_id')->constrained('document_types');
            $table->string('customer_document_number');
            $table->string('customer_name');
            $table->string('customer_phone');
            $table->string('customer_email')->nullable();
            $table->boolean('customer_politically_exposed');
            $table->text('customer_address')->nullable();

            $table->foreignId('beneficiary_document_type_id')->constrained('document_types');
            $table->string('beneficiary_document_number');
            $table->string('beneficiary_name');
            $table->string('beneficiary_phone')->nullable();
            $table->string('beneficiary_email')->nullable();
            $table->foreignId('beneficiary_account_type_id')->constrained('account_types');
            $table->string('beneficiary_number_account');

            $table->foreignId('confirmed_by')->nullable()->constrained('users');
            $table->timestamp('confirmed_at')->nullable();
            $table->foreignId('paid_by')->nullable()->constrained('users');
            $table->timestamp('paid_at')->nullable();

            $table->enum('status', array_keys($transaction_statuses))->default('pending');

            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
