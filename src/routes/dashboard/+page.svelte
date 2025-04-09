<script>
    import { supabase } from "$lib/supabaseClient";

    let user = '';

    const loadUser = async () => {
        const { data } = await supabase.auth.getUser()
        user = data.user
    }

    loadUser()
</script>

<h1>ダッシュボード</h1>
{#if user}
    <p>ようこそ{user.email}</p>
{:else}
    <p>ログインしていません。</p>
{/if}