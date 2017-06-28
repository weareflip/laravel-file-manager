@section('manager')
    <manager path="{{ $path }}" class="file-manager-module"></manager>
@endsection

@push('scripts')
<script>{!! fm_asset('manifest', 'text') !!}</script>
<script src="{{ fm_asset('polyfills') }}"></script>
<script src="{{ fm_asset('manager') }}"></script>
@endpush
