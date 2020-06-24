<template lang="en-US">
<v-app>
    <section class="container">
        <div class="normal">
            <v-row>
                <v-col cols="12" sm="4">
                    <v-hover v-slot:default="{ hover }" close-delay="200" open-delay="200">
                        <v-card :elevation="hover ? 16 : 2" class="mx-auto" height="350" max-width="350">
                            <VCardTitle primary-title>
                                <VIcon>home</VIcon>
                            </VCardTitle>
                            <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
                                <h3>VISIT US</h3>
                                <p>Visit our offices in the below location to interact with us as we offer you services you deserve</p>

                                <address>
                                    Ngaliema No. 942 colonel Mondjiba Kinshasa RDC
                                </address>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>

                <v-col cols="12" sm="4">
                    <v-hover v-slot:default="{ hover }" close-delay="200" open-delay="200">
                        <v-card :elevation="hover ? 16 : 2" class="mx-auto" height="350" max-width="350">
                            <VCardTitle primary-title>
                                <VIcon>call</VIcon>
                            </VCardTitle>
                            <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
                                <h3>CALL US</h3>
                                <p>Please give us a call for any information and clarification via</p>
                                <a href="tel:+254795367024">+254 795 367 024</a>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>

                <v-col cols="12" sm="4">
                    <v-hover v-slot:default="{ hover }" close-delay="200" open-delay="200">
                        <v-card :elevation="hover ? 16 : 2" class="mx-auto" height="350" max-width="350">
                            <VCardTitle primary-title>
                                <VIcon>email</VIcon>
                            </VCardTitle>
                            <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
                                <h3>CONTACT US</h3>
                                <p>Email us via</p>
                                <a href="mailto:Info@derriconglobal.com">Info@derriconglobal.com</a></p>
                            </v-card-text>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
            <div class="vc_row wpb_row vc_row-fluid vc_custom_1513940636934 vc_column-gap-30 vc_row-o-content-middle vc_row-flex">

                <div class="wpb_column vc_column_container vc_col-sm-12 vc_col-has-fill">
                    <div class="vc_column-inner vc_custom_1515058776412">
                        <div class="wpb_wrapper">
                            <h4 style="font-size: 32px;text-align: left;color: #999" class="vc_custom_heading">Contact us</h4>
                            <div class="vc_empty_space" style="height: 20px"><span class="vc_empty_space_inner"></span></div>
                            <div role="form" class="wpcf7" id="wpcf7-f1260-p15-o1" lang="en-US" dir="ltr">
                                <div class="screen-reader-response"></div>
                                <form action="/transport-new-demos/7/contact-us/#wpcf7-f1260-p15-o1" method="post" class="wpcf7-form" novalidate="novalidate">
                                    <div style="display: none;">
                                        <input type="hidden" name="_wpcf7" value="1260">
                                        <input type="hidden" name="_wpcf7_version" value="4.9.2">
                                        <input type="hidden" name="_wpcf7_locale" value="en_US">
                                        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1260-p15-o1">
                                        <input type="hidden" name="_wpcf7_container_post" value="15">
                                    </div>
                                    <div class="col-sm-12 noleftpadding">
                                        <p><span class="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Name*"></span> </p>
                                        <p><span class="wpcf7-form-control-wrap your-subject"><input type="text" name="your-subject" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Subject*"></span> </p>
                                        <p><span class="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Email*"></span> </p>
                                        <p><span class="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="25" rows="3" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Message*"></textarea></span> </p>
                                        <p><input type="submit" value="SEND MESSAGE" class="wpcf7-form-control wpcf7-submit"><span class="ajax-loader"></span></p>
                                    </div>
                                    <div class="wpcf7-response-output wpcf7-display-none"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1018490.5632118783!2d14.712885673277698!3d-4.320778896859434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a33d66ea5b743%3A0x75996958fda47bc6!2sDesign%20Solutions%20de%20Carinata%20International!5e0!3m2!1sen!2ske!4v1590208907605!5m2!1sen!2ske" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            <div class="vc_row-full-width vc_clearfix"></div>

        </div>
    </section>
</v-app>
</template>

<style lang="scss">
.v-icon.v-icon {
    margin: auto;
    font-size: 40px;
    color: #ed8232;
}

.theme--dark.v-card, .theme--dark.v-sheet {
    background-color: #fff;
}

.v-card>*:last-child:not(.v-btn):not(.v-chip) {
    color: #999 !important;

}
</style>
