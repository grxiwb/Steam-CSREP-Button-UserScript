// ==UserScript==
// @name         Steam CSREP Button
// @namespace    steam-csrep-button
// @version      1.0
// @description  A simple userscript that adds CSREP button to a steam profile
// @match        https://steamcommunity.com/profiles/*
// @match        https://steamcommunity.com/id/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function addCsrepButton() {
        if (typeof unsafeWindow !== 'undefined' && unsafeWindow.g_rgProfileData) {
            var steamId64 = unsafeWindow.g_rgProfileData.steamid;
            if (!steamId64) return;
        } else if (window.g_rgProfileData) {
            var steamId64 = window.g_rgProfileData.steamid;
            if (!steamId64) return;
        } else {
            return;
        }

        var actionsBlock =
            document.querySelector('.profile_header_actions') ||
            document.querySelector('.profile_header_actions_inner');

        if (!actionsBlock) return;

        if (document.getElementById('csrep-button')) return;

        var csrepUrl = 'https://csrep.gg/player/' + steamId64;

        var btn = document.createElement('a');
        btn.id = 'csrep-button';
        btn.href = csrepUrl;
        btn.target = '_blank';
        btn.textContent = 'CSREP.gg';

        btn.style.display = 'inline-block';
        btn.style.padding = '6px 12px';
        btn.style.background = '#0E121B';
        btn.style.border = '1px solid #0E121B';
        btn.style.color = '#ACAFB7';
        btn.style.textDecoration = 'none';
        btn.style.fontSize = '12px';
        btn.style.borderRadius = '2px';
        btn.style.cursor = 'pointer';

        btn.onmouseenter = () => {
            btn.style.background = '#0E2927';
            btn.style.color = '#EEF2F6';
            btn.style.border = '1px solid #089156';
        };
        btn.onmouseleave = () => {
            btn.style.background = '#0E121B';
            btn.style.color = '#ACAFB7';
            btn.style.border = '1px solid #0E121B';
        };

        actionsBlock.appendChild(btn);
    }

    setTimeout(addCsrepButton, 0);
})();
