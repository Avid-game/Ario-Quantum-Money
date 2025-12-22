import { createClient } from '@supabase/supabase-client'

// آدرس اختصاصی دیتابیس آریو کوانتوم
const supabaseUrl = 'https://ccusimbyepxhhjxbopbn.supabase.co'
// کلید عمومی که قبلاً کپی کردی (بخش Publishable key)
const supabaseAnonKey = sb_publishable_sqnNTDNwGoibZmFxqi57pg_nqtoK2TU

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
