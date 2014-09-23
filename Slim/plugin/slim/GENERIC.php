<?php

class MyMiddleware extends \Slim\Middleware
{
    public function call()
    {
        //Optionally call the next middleware
        $this->next->call();
    }
}