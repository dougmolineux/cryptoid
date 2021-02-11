# cryptoid
Cryptoid - React Native Mobile Game based on investing in Cryptocurrency

# Setup
```
npm install -g expo-cli
```
Then cd into the project folder
```
cd cryptoid-rn-project
```
Then you can run these:

```
- npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- npm run android
- npm run ios
- npm run web
```

# State 
Stores the player, money and portfolioValue. Uses `react-redux` is located in the `/state` directory.

# TODO
[x] Get the react native project running with hello world

[] Get react-redux working (partially done)

[] Store money and portfolioValue inside state

[x] Display money on a single tab

[] Add redux-persist to the project saving state between app launches

[x] Update Tab One Title to be Cryptoid

[] Add buy sell buttons to crypto prices tab

[] Create buy / sell view (with slider, confirm, cancel button)

[] Update so that buy / sell modifies player money and portfolio value

[] Randomize Crypto prices (by a random percentage)

[] Add Next button to the Player information tab