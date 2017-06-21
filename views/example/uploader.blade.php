@extends('flipninja/file-manager::example.base')
@include('flipninja/file-manager::uploader', ['path' => '/'])

@section('content')
    @yield('uploader')
@endsection
