<script>
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
<button on:click={handleLogin}>ログイン</button>