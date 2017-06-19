<upload-form></upload-form>

@push('css')
    <link href="{{ fm_asset('manager', 'css') }}" rel="stylesheet">
@endpush

@push('scripts')
    <script src="{{ fm_asset('manifest') }}"></script>
    <script src="{{ fm_asset('vendor') }}"></script>
    <script src="{{ fm_asset('polyfills') }}"></script>
    <script src="{{ fm_asset('uploader') }}"></script>
@endpush
