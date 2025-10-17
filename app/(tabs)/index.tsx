import { Image, Text, ScrollView, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.pageContent}>
      {/* Hero */}
      <View style={styles.heroContainer}>
        <View style={styles.heroTextContainer}>
          <Text style={styles.heroGreeting}>
            Halo! <Text style={styles.highlight}>Perkenalkan saya,</Text>
          </Text>
          <Text style={styles.heroName}>Muhammad Najib Fadhlurrohman</Text>
          <Text style={styles.heroProfession}>
            Web <Text style={styles.highlightBold}>Developer</Text>
          </Text>
          <Text style={styles.heroUniversity}>
            Mahasiswa{" "}
            <Text style={styles.highlight}>Universitas Bina Nusantara</Text>
          </Text>
          <Text style={styles.heroDescription}>
            Di sini Anda dapat menemukan informasi tentang diri saya, proyek yang
            telah saya kerjakan, dan keterampilan yang saya miliki.
          </Text>
        </View>

        <Image
          source={require("../../assets/images/hero.png")}
          style={styles.profileImage}
        />
      </View>

      {/* Informasi */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Informasi Saya</Text>

        <Text style={styles.infoItemTitle}>Universitas Bina Insani</Text>
        <Text style={styles.infoItemDescription}>
          Saya adalah seorang mahasiswa Universitas Bina Insani, jurusan Sistem
          Informasi, fakultas Informatika dan Desain. Saat ini saya sedang
          menempuh pendidikan di semester 7 dan aktif dalam mengikuti pelatihan
          yang relevan dengan bidang saya.
        </Text>

        <Text style={styles.infoItemTitle}>Website & Software Development</Text>
        <Text style={styles.infoItemDescription}>
          Saya tertarik pada pengembangan perangkat lunak dan teknologi
          informasi, berpengalaman membangun aplikasi web dengan HTML, CSS, dan
          beberapa framework. Saya juga memiliki keterampilan pemrograman dalam
          C, Java, dan Python.
        </Text>
      </View>

      {/* Pendidikan & Pelatihan */}
      <View style={styles.schoolSection}>
        <Text style={styles.infoTitle}>Pendidikan & Pelatihan</Text>

        <View style={styles.schoolItem}>
          <Image
            source={require("../../assets/images/sman8-logo.png")}
            style={styles.schoolLogo}
          />
          <Text style={styles.schoolName}>SMA Negeri 8 Bekasi</Text>
        </View>

        <View style={styles.schoolItem}>
          <Image
            source={require("../../assets/images/univbinainsani-logo.png")}
            style={styles.schoolLogo}
          />
          <Text style={styles.schoolName}>Universitas Bina Insani</Text>
        </View>

        <View style={styles.schoolItem}>
          <Image
            source={require("../../assets/images/webhozz-logo.jpeg")}
            style={styles.schoolLogo}
          />
          <Text style={styles.schoolName}>Webhozz</Text>
        </View>

        <View style={styles.schoolItem}>
          <Image
            source={require("../../assets/images/haltev-logo.png")}
            style={styles.schoolLogo}
          />
          <Text style={styles.schoolName}>Haltev Bekasi</Text>
        </View>

        <View style={styles.schoolItem}>
          <Image
            source={require("../../assets/images/maxy-logo.png")}
            style={styles.schoolLogo}
          />
          <Text style={styles.schoolName}>Maxy Academy</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#F8FAFC",
  },
  pageContent: {
    padding: 16,
    paddingBottom: 32,
  },

  // Hero
  heroContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 16,
    // shadow iOS
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    // shadow Android
    elevation: 2,
  },
  heroTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  heroGreeting: {
    fontSize: 16,
    marginBottom: 6,
    color: "#111827",
  },
  heroName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 6,
  },
  heroProfession: {
    fontSize: 18,
    color: "#111827",
    marginBottom: 6,
  },
  heroUniversity: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 14,
    color: "#4B5563",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#EEF2FF",
  },
  highlight: {
    color: "#4F46E5",
    fontWeight: "600",
  },
  highlightBold: {
    color: "#4F46E5",
    fontWeight: "700",
  },

  // Info
  infoSection: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    color: "#0F172A",
  },
  infoItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: 8,
    marginBottom: 4,
    color: "#0051ffff",
  },
  infoItemDescription: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
  },

  // School
  schoolSection: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 16,
  },
  schoolItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  schoolLogo: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 12,
    resizeMode: "contain",
  },
  schoolName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },
});