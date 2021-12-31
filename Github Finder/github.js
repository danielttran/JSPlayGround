"use strict";

class Github
{
    constructor()
    {
        // request new one at 
        // https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps
        this.client_id = '1f2ac6c42bd707e61979';
        this.client_secret = '1f3c5b52c04b4f904ba753ebbf00b186723bec5a';
    }

    async getUser(user)
    {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return profile;
    }
}