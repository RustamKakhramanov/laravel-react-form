<?php


namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MessagesController extends Controller
{
    public function sendToEmail(Request $request) {
        //Проверка данных
        $request->validate([
                'textMessage' => 'required|string|max:600'
            ]
        );

        //Сохранение записи в бд || Save message in database
        $message = Message::create([
                'body' => $request->post('textMessage'),
            ]
        );

        // We send a letter to the mail if the record is preserved || Отправляем письмо на почту если запись сохранилась
        if( $message ) {
            Mail::send('mails.default', ['text' => $message->body], function($message)
            {
                $message->to('foo@example.com', 'Какой то человек')->subject('Hi! This is message example');
            });

            return response()->json( $request->post('textMessage') );
        }

        return response()->json('Server Error', 500 );
    }
}
