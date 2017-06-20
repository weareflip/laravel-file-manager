@extends('flipninja/file-manager::example.base')
@include('flipninja/file-manager::uploader')

@section('content')
    @yield('uploader')
@endsection
