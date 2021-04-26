# Super Eisecreme-App
## Bauen & Starten der Anwendung
Benötigt wird Maven (3.5+) und Java (11+).
Die Anwendung kann entweder mit Maven gebaut und dann via Konsole gestartet werden, oder aus der IDE (z.B. IntelliJ) heraus. 

###mit Maven / via Konsole
Projekt mit 
`maven clean install`
bauen. Anschließend Jar-Datei aus dem Target-Vergeichnis starten.
Zum Beispiel:
``java -jar icecream-0.0.1-SNAPSHOT.jar``
Voraussetzung ist, dass Port 8080 frei ist. 
Aufrufbar ist die Anwendung anschließend unter http://localhost:8080/

### aus der IDE heraus
SpringIcecreamApplication in der IDE starten. Danach Angular CLI starten mit ``ng serve``. Die Anwendung ist dann unter http://localhost:4200 erreichbar.
