# Installation

To install the latest version, simply copy these Gradle properties over. Remember to also install [Javacord](https://javacord.org) 
as well as the framework is layered above it, therefore, needs it to function.

```gradle
repositories {
    maven { url = "https://jitpack.io" }
}

dependencies {
    implementation("pw.mihou:Nexus:${latest-version}")
}
```