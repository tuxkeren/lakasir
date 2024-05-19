<?php

namespace App\Filament\Tenant\Resources\DebtResource\Traits;

use App\Models\Tenants\PaymentMethod;
use App\Models\Tenants\Setting;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Support\RawJs;

trait HasDebtPaymentForm
{
    public function getFormPayment(): array
    {
        return [
            Select::make('payment_method_id')
                ->options(PaymentMethod::query()->pluck('name', 'id'))
                ->required(),
            TextInput::make('amount')
                ->mask(RawJs::make('$money($input)'))
                ->stripCharacters(',')
                ->prefix(Setting::get('currency', 'IDR'))
                // ->lte(fn (Debt $debt) => $debt->rest_debt)
                ->required(),
            DatePicker::make('date')
                ->native(false)
                ->label(__('Debt Payment'))
                ->required(),
        ];
    }
}
