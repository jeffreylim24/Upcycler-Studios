import { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface Props {
  minPrice?: string | null;
  maxPrice?: string | null;
  onMinPriceChange?: (value: string) => void;
  onMaxPriceChange?: (value: string) => void;
}

export const formatAsCurrency = (value: string) => {
  const numericValue = value.replace(/[^0-9.]/g, '');
  const parts = numericValue.split('.');
  const formattedValue = parts[0] + (parts.length > 1 ? '.' + parts[1]?.slice(0, 2) : '');
  if (!formattedValue) return '';
  const numberValue = parseFloat(formattedValue);
  if (isNaN(numberValue)) return '';
  return new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(numberValue);
};

export const PriceFilter = ({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange }: Props) => {
  const min = 0;
  const max = 1000;

  // Default to 0 and 1000 if not set
  const minVal = minPrice === null || minPrice === undefined || minPrice === "" ? min : Number(minPrice);
  const maxVal = maxPrice === null || maxPrice === undefined || maxPrice === "" ? max : Number(maxPrice);

  // Ensure minVal is not greater than maxVal and vice versa
  const valuePair: [number, number] = [
    Math.min(minVal, maxVal),
    Math.max(minVal, maxVal)
  ];

  const handleSlider = (values: number | number[]) => {
    if (Array.isArray(values)) {
      onMinPriceChange?.(String(values[0]));
      onMaxPriceChange?.(String(values[1]));
    }
  };

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9.]/g, '');
    onMinPriceChange?.(numericValue);
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^0-9.]/g, '');
    onMaxPriceChange?.(numericValue);
  };

  return (
    <div className='flex flex-col gap-4'>
      <Label className='font-medium text-base text-white'>Price Range</Label>
      <div className='px-2'>
        <Slider
          range
          min={min}
          max={max}
          value={valuePair}
          onChange={handleSlider}
          allowCross={false}
          pushable={1} 
          trackStyle={[{ backgroundColor: '#888' }]}
          handleStyle={[
            { borderColor: '#fff', backgroundColor: '#222' },
            { borderColor: '#4A90E2', backgroundColor: '#222' }
          ]}
        />
        <div className='flex justify-between text-xs text-gray-300 mt-2'>
          <span>{formatAsCurrency(String(valuePair[0]))}</span>
          <span>{formatAsCurrency(String(valuePair[1]))}</span>
        </div>
      </div>
      {/* Manual input controls */}
      <div className='flex flex-col gap-2'>
        <Label className='font-medium text-base text-white'>Minimum Price</Label>
        <Input
          className='bg-[#1a1a1a] border-gray-700 text-white placeholder:text-gray-500'
          type='text'
          placeholder='$0'
          value={minPrice ? formatAsCurrency(minPrice) : ''}
          onChange={handleMinPriceChange}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <Label className='font-medium text-base text-white'>Maximum Price</Label>
        <Input
          className='bg-[#1a1a1a] border-gray-700 text-white placeholder:text-gray-500'
          type='text'
          placeholder='None'
          value={maxPrice ? formatAsCurrency(maxPrice) : ''}
          onChange={handleMaxPriceChange}
        />
      </div>
    </div>
  );
};