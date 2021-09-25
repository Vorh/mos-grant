<template>
    <v-footer dark padless>
        <v-card
                class="footer-row white--text text-center"
                width="100%"
                flat
                tile
        >
            <v-card-text>
                <v-btn icon target="_blank">
                    <v-icon color="black">mdi-github</v-icon>
                </v-btn>

                <v-btn icon target="_blank">
                    <v-icon color="black">mdi-discord</v-icon>
                </v-btn>

                <v-btn icon target="_blank">
                    <v-icon color="black">mdi-twitter</v-icon>
                </v-btn>

                <v-btn icon target="_blank">
                    <v-icon color="black">mdi-email</v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                <!-- TODO: footer text -->
                Footer text
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>mos-grant</strong>
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

</style>
