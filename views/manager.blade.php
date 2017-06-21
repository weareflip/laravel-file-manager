@section('manager')
    <manager class="file-manager-module"></manager>
@endsection

@push('styles')
<link href="{{ fm_asset('manager', 'css') }}" rel="stylesheet">
@endpush

@push('scripts')
<script src="{{ fm_asset('manifest') }}"></script>
<script src="{{ fm_asset('vendor') }}"></script>
<script src="{{ fm_asset('polyfills') }}"></script>
<script src="{{ fm_asset('manager') }}"></script>
@endpush
