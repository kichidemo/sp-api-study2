<!-- <script>
    import { supabase } from '$lib/supabaseClient';

    let email = '';
    let password = '';

    const handleLogin = async() => {
        const { error } = await supabase.auth.signInWithPassword({ email, password});
        if (error) {
            alert('ログイン失敗'+ error.message);
        } else {
            window.location.href = '/dashboard'
        }
    }
</script>

<h1>ログイン</h1>
<input type="email" bind:value={email} placeholder="Email" />
<input type="password" bind:value={password} placeholder="パスワード" />
<button on:click={handleLogin}>ログイン</button> -->
<!-- 
<script>
    import { createClient } from '@supabase/supabase-js'
  
    const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
    const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY
  
    console.log('✅ supabaseUrl:', supabaseUrl)
    console.log('✅ supabaseAnonKey:', supabaseAnonKey)
  
    export const supabase = createClient(supabaseUrl, supabaseAnonKey)
  
    let email = ''
    let password = ''
  
    const handleLogin = async () => {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        alert('ログイン失敗: ' + error.message)
      } else {
        window.location.href = '/dashboard'
      }
    }
  </script>
  
  <h1>ログインテスト</h1>
  <input type="email" bind:value={email} placeholder="Email" />
  <input type="password" bind:value={password} placeholder="パスワード" />
  <button on:click={handleLogin}>ログイン</button>
   -->

<script>
  import { createClient } from '@supabase/supabase-js'

  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
  const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY

  console.log('🧪 supabaseUrl:', supabaseUrl)
  console.log('🧪 supabaseAnonKey:', supabaseAnonKey)

  let supabase
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
    console.log('✅ Supabase client initialized')
  } catch (e) {
    console.error('❌ Supabase client init failed', e)
  }

  let email = ''
  let password = ''

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        alert('ログイン失敗: ' + error.message)
      } else {
        window.location.href = '/dashboard'
      }
    } catch (e) {
      console.error('❌ ログイン処理で例外発生:', e)
    }
  }
</script>

<h1>ログインテスト</h1>
<input type="email" bind:value={email} placeholder="Email" />
<input type="password" bind:value={password} placeholder="パスワード" />
<button on:click={handleLogin}>ログイン</button>
