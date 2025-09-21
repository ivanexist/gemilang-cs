import { motion } from "framer-motion";
const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-6 w-6 text-[hsl(207,90%,54%)] mr-3" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    {t("contact.form.title")}
                  </h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground mb-2"
                      >
                        {t("contact.form.name")} *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder={
                          language === "id"
                            ? "Nama lengkap Anda"
                            : "Your full name"
                        }
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground mb-2"
                      >
                        {t("contact.form.email")} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground mb-2"
                      >
                        {t("contact.form.phone")}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="+62 XXX XXX XXXX"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="service"
                        className="text-sm font-medium text-foreground mb-2"
                      >
                        {t("contact.form.service")}
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue
                            placeholder={
                              language === "id"
                                ? "Pilih layanan"
                                : "Select a service"
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="building">
                            Pembangunan Gedung
                          </SelectItem>
                          <SelectItem value="housing">
                            Pembangunan Perumahan
                          </SelectItem>
                          <SelectItem value="road">
                            Pembangunan Jalan
                          </SelectItem>
                          <SelectItem value="pipe">Instalasi Pipa</SelectItem>
                          <SelectItem value="steel">Konstruksi Baja</SelectItem>
                          <SelectItem value="drainage">
                            Sistem Drainase
                          </SelectItem>
                          <SelectItem value="renovation">Renovasi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground mb-2"
                    >
                      {t("contact.form.message")} *
                    </Label>
                    <Textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder={
                        language === "id"
                          ? "Silakan jelaskan kebutuhan proyek Anda, jadwal, dan kebutuhan khusus lainnya..."
                          : "Please describe your project requirements, timeline, and any specific needs..."
                      }
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-[hsl(207,90%,54%)] hover:bg-[hsl(220,70%,35%)] text-white transform hover:scale-105 transition-all shadow-lg"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {contactMutation.isPending
                      ? language === "id"
                        ? "Mengirim..."
                        : "Sending..."
                      : t("contact.form.submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-[hsl(207,90%,54%)] to-[hsl(220,70%,35%)] text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  {t("contact.info.title")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[hsl(120,85%,45%)] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">
                        {t("contact.info.address")}
                      </div>
                      <div className="text-gray-200">
                        Jl. Raya Surabaya No. 123, Surabaya, East Java 60111
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-[hsl(120,85%,45%)] mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-medium">
                        {t("contact.info.phone")}
                      </div>
                      <div className="text-gray-200">+62 31 1234 5678</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-[hsl(120,85%,45%)] mr-4 flex-shrink-0" />
                    <div>
                      <div className="font-medium">
                        {t("contact.info.email")}
                      </div>
                      <div className="text-gray-200">
                        info@gemilangciptasentosa.co.id
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[hsl(120,85%,45%)] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">
                        {t("contact.info.hours")}
                      </div>
                      <div className="text-gray-200">
                        {language === "id"
                          ? "Senin - Jumat: 08:00 - 17:00"
                          : "Monday - Friday: 8:00 AM - 5:00 PM"}
                      </div>
                      <div className="text-gray-200">
                        {language === "id"
                          ? "Sabtu: 08:00 - 12:00"
                          : "Saturday: 8:00 AM - 12:00 PM"}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps Placeholder */}
            <Card className="h-64">
              <CardContent className="h-full flex items-center justify-center bg-muted/50 rounded-lg">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-medium">Google Maps Integration</p>
                  <p className="text-sm">
                    {language === "id"
                      ? "Peta interaktif akan ditampilkan di sini"
                      : "Interactive map will be displayed here"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
