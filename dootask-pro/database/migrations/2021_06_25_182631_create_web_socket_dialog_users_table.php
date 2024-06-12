<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWebSocketDialogUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('web_socket_dialog_users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('dialog_id')->nullable()->default(0)->comment('对话ID');
            $table->bigInteger('userid')->nullable()->default(0)->comment('会员ID');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('web_socket_dialog_users');
    }
}
