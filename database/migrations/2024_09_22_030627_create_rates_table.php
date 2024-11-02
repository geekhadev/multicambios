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
        Schema::create('rates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('exchange_id')->constrained();
            $table->timestamp('timestamp')->default(now());
            $table->decimal('general_rate', 10, 5);
            $table->decimal('general_profit', 10, 5);
            $table->decimal('general_profit_percent', 10, 2);
            $table->decimal('preference_rate', 10, 5);
            $table->decimal('preference_profit', 10, 5);
            $table->decimal('preference_profit_percent', 10, 2);
            $table->decimal('rate_dolar', 10, 2);
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
