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
        $percentage_decimal = config('multicambios.percentage_decimal');

        Schema::create('rates', function (Blueprint $table) use ($amount_integer, $amount_decimal, $percentage_decimal) {
            $table->id();
            $table->foreignId('exchange_id')->constrained();
            $table->decimal('general_rate', $amount_integer, $amount_decimal);
            $table->decimal('general_profit', $amount_integer, $amount_decimal);
            $table->decimal('general_profit_percent', $amount_integer, $percentage_decimal);
            $table->decimal('preference_rate', $amount_integer, $amount_decimal);
            $table->decimal('preference_profit', $amount_integer, $amount_decimal);
            $table->decimal('preference_profit_percent', $amount_integer, $percentage_decimal);
            $table->decimal('rate_dollar', $amount_integer, $percentage_decimal);
            $table->string('operator')->default('*');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rates');
    }
};
