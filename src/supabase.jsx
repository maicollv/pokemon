import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dtdnrikjnszgpkkvtmhp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0ZG5yaWtqbnN6Z3Bra3Z0bWhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNzA1NzcsImV4cCI6MjA2Mjg0NjU3N30.CsDCDj5UR8DTdVzw-VjHdl2f5GpzYmCFdh6GpuHOks0';
export const supabase = createClient(supabaseUrl, supabaseKey);