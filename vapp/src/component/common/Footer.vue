<template>
    <v-footer dark padless>
        <v-card
                class="footer-row white--text text-center"
                width="100%"
                flat
                tile
        >
            <v-card-text class="white--text">
                <div>
                    <a href="https://github.com/Vorh/mos-grant">
                        <v-icon class="footer-icon">mdi-github</v-icon>
                    </a>

                    <a href="https://discord.com/channels/890240325744984104/890240325744984107">
                        <v-icon class="footer-icon">mdi-discord</v-icon>
                    </a>

                    <a href="mailto:mos-grant@mail.ru">
                        <v-icon class="footer-icon">mdi-email</v-icon>
                    </a>
                </div>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>

.footer-row {
    background-color: #2C2C2C;
}

.footer-icon {
    color: #ffffff;
    margin-left: 5px;
    margin-right: 5px;
}

</style>
