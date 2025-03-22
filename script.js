const champions= [
  { name: 'Aatrox', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Aatrox_0.webp' },
  { name: 'Ahri', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Ahri_0.webp' },
  { name: 'Akali', role: 'Assassin', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Akali_0.webp' },
  { name: 'Akshan', role: 'Marksman', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Akshan_0.webp' },
  { name: 'Alistar', role: 'Tank', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Alistar_0.webp' },
  { name: 'Amumu', role: 'Tank', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Amumu_0.webp' },
  { name: 'Anivia', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Anivia_0.webp' },
  { name: 'Annie', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Annie_0.webp' },
  { name: 'Aphelios', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Aphelios_0.webp' },
  { name: 'Ashe', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Ashe_0.webp' },
  { name: 'Aurelion Sol', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/AurelionSol_0.webp' },
  { name: 'Azir', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Azir_0.webp' },
  { name: 'Bard', role: 'Support', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Bard_0.webp' },
  { name: 'Blitzcrank', role: 'Tank', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Blitzcrank_0.webp' },
  { name: 'Brand', role: 'Mage', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Brand_0.webp' },
  { name: 'Braum', role: 'Tank', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Braum_0.webp' },
  { name: 'Caitlyn', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Caitlyn_0.webp' },
  { name: 'Camille', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Camille_0.webp' },
  { name: 'Cassiopeia', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Cassiopeia_0.webp' },
  { name: 'Chogath', role: 'Tank', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Chogath_0.webp' },
  { name: 'Corki', role: 'Marksman', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Corki_0.webp' },
  { name: 'Darius', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Darius_0.webp' },
  { name: 'Diana', role: 'Fighter', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Diana_0.webp' },
  { name: 'DrMundo', role: 'Tank', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/DrMundo_0.webp' },
  { name: 'Draven', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Draven_0.webp' },
  { name: 'Ekko', role: 'Assassin', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Ekko_0.webp' },
  { name: 'Elise', role: 'Mage', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Elise_0.webp' },
  { name: 'Evelynn', role: 'Assassin', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Evelynn_0.webp' },
  { name: 'Ezreal', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Ezreal_0.webp' },
  { name: 'Fiddlesticks', role: 'Mage', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Fiddlesticks_0.webp' },
  { name: 'Fiora', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Fiora_0.webp' },
  { name: 'Fizz', role: 'Assassin', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Fizz_0.webp' },
  { name: 'Galio', role: 'Tank', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Galio_0.webp' },
  { name: 'Gangplank', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Gangplank_0.webp' },
  { name: 'Garen', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Garen_0.webp' },
  { name: 'Gnar', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Gnar_0.webp' },
  { name: 'Gragas', role: 'Mage', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Gragas_0.webp' },
  { name: 'Graves', role: 'Marksman', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Graves_0.webp' },
  { name: 'Gwen', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Gwen_0.webp' },
  { name: 'Hecarim', role: 'Fighter', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Hecarim_0.webp' },
  { name: 'Heimerdinger', role: 'Mage', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Heimerdinger_0.webp' },
  { name: 'Illaoi', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Illaoi_0.webp' },
  { name: 'Irelia', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Irelia_0.webp' },
  { name: 'Ivern', role: 'Support', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Ivern_0.webp' },
  { name: 'Janna', role: 'Support', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Janna_0.webp' },
  { name: 'JarvanIV', role: 'Tank', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/JarvanIV_0.webp' },
  { name: 'Jax', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Jax_0.webp' },
  { name: 'Jayce', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Jayce_0.webp' },
  { name: 'Jhin', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Jhin_0.webp' },
  { name: 'Jinx', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Jinx_0.webp' },
  { name: 'Kaisa', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Kaisa_0.webp' },
  { name: 'Kalista', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Kalista_0.webp' },
  { name: 'Karma', role: 'Support', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Karma_0.webp' },
  { name: 'Karthus', role: 'Mage', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Karthus_0.webp' },
  { name: 'Kassadin', role: 'Assassin', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Kassadin_0.webp' },
  { name: 'Katarina', role: 'Assassin', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Katarina_0.webp' },
  { name: 'Kayle', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Kayle_0.webp' },
  { name: 'Kayn', role: 'Fighter', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Kayn_0.webp' },
  { name: 'Kennen', role: 'Mage', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Kennen_0.webp' },
  { name: 'Khazix', role: 'Assassin', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Khazix_0.webp' },
  { name: 'Kindred', role: 'Marksman', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Kindred_0.webp' },
  { name: 'Kled', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Kled_0.webp' },
  { name: 'Kogmaw', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/KogMaw_0.webp' },
  { name: 'LeBlanc', role: 'Assassin', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Leblanc_0.webp' },
  { name: 'Leesin', role: 'Fighter', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/LeeSin_0.webp' },
  { name: 'Leona', role: 'Tank', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Leona_0.webp' },
  { name: 'Lillia', role: 'Fighter', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Lillia_0.webp' },
  { name: 'Lissandra', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Lissandra_0.webp' },
  { name: 'Lucian', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Lucian_0.webp' },
  { name: 'Lulu', role: 'Support', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Lulu_0.webp' },
  { name: 'Lux', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Lux_0.webp' },
  { name: 'Malphite', role: 'Tank', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Malphite_0.webp' },
  { name: 'Malzahar', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Malzahar_0.webp' },
  { name: 'Maokai', role: 'Tank', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Maokai_0.webp' },
  { name: 'MasterYi', role: 'Assassin', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/MasterYi_0.webp' },
  { name: 'MissFortune', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/MissFortune_0.webp' },
  { name: 'Mordekaiser', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Mordekaiser_0.webp' },
  { name: 'Morgana', role: 'Mage', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Morgana_0.webp' },
  { name: 'Nami', role: 'Support', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Nami_0.webp' },
  { name: 'Nasus', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Nasus_0.webp' },
  { name: 'Nautilus', role: 'Tank', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Nautilus_0.webp' },
  { name: 'Neeko', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Neeko_0.webp' },
  { name: 'Nidalee', role: 'Assassin', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Nidalee_0.webp' },
  { name: 'Nocturne', role: 'Assassin', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Nocturne_0.webp' },
  { name: 'Nunu', role: 'Tank', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Nunu_0.webp' },
  { name: 'Olaf', role: 'Fighter', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Olaf_0.webp' },
  { name: 'Orianna', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Orianna_0.webp' },
  { name: 'Ornn', role: 'Tank', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Ornn_0.webp' },
  { name: 'Pantheon', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Pantheon_0.webp' },
  { name: 'Poppy', role: 'Tank', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Poppy_0.webp' },
  { name: 'Pyke', role: 'Support', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Pyke_0.webp' },
  { name: 'Qiyana', role: 'Assassin', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Qiyana_0.webp' },
  { name: 'Quinn', role: 'Marksman', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Quinn_0.webp' },
  { name: 'Rakan', role: 'Support', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Rakan_0.webp' },
  { name: 'Rammus', role: 'Tank', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Rammus_0.webp' },
  { name: 'Reksai', role: 'Fighter', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/RekSai_0.webp' },
  { name: 'Rell', role: 'Tank', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Rell_0.webp' },
  { name: 'Renekton', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Renekton_0.webp' },
  { name: 'Rengar', role: 'Assassin', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Rengar_0.webp' },
  { name: 'Riven', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Riven_0.webp' },
  { name: 'Rumble', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Rumble_0.webp' },
  { name: 'Ryze', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Ryze_0.webp' },
  { name: 'Samira', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Samira_0.webp' },
  { name: 'Sejuani', role: 'Tank', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Sejuani_0.webp' },
  { name: 'Senna', role: 'Support', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Senna_0.webp' },
  { name: 'Seraphine', role: 'Mage', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Seraphine_0.webp' },
  { name: 'Sett', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Sett_0.webp' },
  { name: 'Shaco', role: 'Assassin', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Shaco_0.webp' },
  { name: 'Shen', role: 'Tank', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Shen_0.webp' },
  { name: 'Shyvana', role: 'Fighter', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Shyvana_0.webp' },
  { name: 'Singed', role: 'Tank', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Singed_0.webp' },
  { name: 'Sion', role: 'Tank', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Sion_0.webp' },
  { name: 'Sivir', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Sivir_0.webp' },
  { name: 'Skarner', role: 'Fighter', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Skarner_0.webp' },
  { name: 'Smolder', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Smolder_0.webp' },
  { name: 'Sona', role: 'Support', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Sona_0.webp' },
  { name: 'Soraka', role: 'Support', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Soraka_0.webp' },
  { name: 'Swain', role: 'Mage', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Swain_0.webp' },
  { name: 'Sylas', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Sylas_0.webp' },
  { name: 'Syndra', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Syndra_0.webp' },
  { name: 'TahmKench', role: 'Tank', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/TahmKench_0.webp' },
  { name: 'Taliyah', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Taliyah_0.webp' },
  { name: 'Talon', role: 'Assassin', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Talon_0.webp' },
  { name: 'Taric', role: 'Support', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Taric_0.webp' },
  { name: 'Teemo', role: 'Marksman', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Teemo_0.webp' },
  { name: 'Thresh', role: 'Support', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Thresh_0.webp' },
  { name: 'Tristana', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Tristana_0.webp' },
  { name: 'Trundle', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Trundle_0.webp' },
  { name: 'Tryndamere', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Tryndamere_0.webp' },
  { name: 'TwistedFate', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/TwistedFate_0.webp' },
  { name: 'Twitch', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Twitch_0.webp' },
  { name: 'Udyr', role: 'Fighter', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Udyr_0.webp' },
  { name: 'Urgot', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Urgot_0.webp' },
  { name: 'Varus', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Varus_0.webp' },
  { name: 'Vayne', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Vayne_0.webp' },
  { name: 'Veigar', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Veigar_0.webp' },
  { name: 'Velkoz', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Velkoz_0.webp' },
  { name: 'Vex', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Vex_0.webp' },
  { name: 'Vi', role: 'Fighter', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Vi_0.webp' },
  { name: 'Viego', role: 'Assassin', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Viego_0.webp' },
  { name: 'Viktor', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Viktor_0.webp' },
  { name: 'Vladimir', role: 'Mage', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Vladimir_0.webp' },
  { name: 'Volibear', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Volibear_0.webp' },
  { name: 'Warwick', role: 'Fighter', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Warwick_0.webp' },
  { name: 'Wukong', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/MonkeyKing_0.webp' },
  { name: 'Xayah', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Xayah_0.webp' },
  { name: 'Xerath', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Xerath_0.webp' },
  { name: 'XinZhao', role: 'Fighter', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/XinZhao_0.webp' },
  { name: 'Yasuo', role: 'Assassin', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Yasuo_0.webp' },
  { name: 'Yone', role: 'Assassin', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Yone_0.webp' },
  { name: 'Yorick', role: 'Fighter', lane: 'Top', image: 'https://lolfinder.net/images/league/champions/card/Yorick_0.webp' },
  { name: 'Yuumi', role: 'Support', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Yuumi_0.webp' },
  { name: 'Zac', role: 'Tank', lane: 'Jungle', image: 'https://lolfinder.net/images/league/champions/card/Zac_0.webp' },
  { name: 'Zed', role: 'Assassin', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Zed_0.webp' },
  { name: 'Zeri', role: 'Marksman', lane: 'Bot', image: 'https://lolfinder.net/images/league/champions/card/Zeri_0.webp' },
  { name: 'Ziggs', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Ziggs_0.webp' },
  { name: 'Zilean', role: 'Support', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Zilean_0.webp' },
  { name: 'Zoe', role: 'Mage', lane: 'Mid', image: 'https://lolfinder.net/images/league/champions/card/Zoe_0.webp' },
  { name: 'Zyra', role: 'Mage', lane: 'Support', image: 'https://lolfinder.net/images/league/champions/card/Zyra_0.webp' }
];

const items= [
    { name: 'Berserkers Greaves', place: 'Boot', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3006.png'} ,
    { name: 'Boots of Swiftness', place: 'Boot', playstyle: 'AD', playstyle2: 'AP', playstyle3: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3009.png'} ,
    { name: 'Ionian Boots of Lucidity', place: 'Boot', playstyle: 'AD', playstyle2: 'AP', playstyle3: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3158.png'} ,
    { name: 'Mercurys Treads', place: 'Boot', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3111.png'} ,
    { name: 'Plated Steelcaps', place: 'Boot', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3047.png'} ,
    { name: 'Sorcerer Shoes', place: 'Boot', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3020.png'} ,
    { name: 'Symbiotic Soles', place: 'Boot', playstyle: 'AD', playstyle2: 'AP', playstyle3: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3010.png'} ,
    { name: 'Abyssal Mask', place: 'Item', playstyle: 'AP', playstyle2: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/8020.png' } ,
    { name: 'Archangels Staff', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3003.png' } ,
    { name: 'Ardent Censer', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3504.png' } ,
    { name: 'Axiom Arc', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6696.png' } ,
    { name: 'Banshees Veil', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3102.png' } ,
    { name: 'Black Cleaver', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3071.png' } ,
    { name: 'Blackfire Torch', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/2503.png' } ,
    { name: 'Blade of the Ruined King', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3153.png' } ,
    { name: 'Bloodsong', place: 'Item', playstyle: 'AD', playstyle2: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3877.png' } ,
    { name: 'Bloodthirster', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3072.png' } ,
    { name: 'Celestial Opposition', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3869.png' } ,
    { name: 'Chempunk Chainsword', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6609.png' } ,
    { name: 'Cosmic Drive', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/4629.png' } ,
    { name: 'Cryptbloom', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3137.png' } ,
    { name: 'Dawncore', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6621.png' } ,
    { name: 'Dead Mans Plate', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3742.png' } ,
    { name: 'Deaths Dance', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6333.png' } ,
    { name: 'Dream Maker', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3870.png' } ,
    { name: 'Echoes of Helia', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6620.png' } ,
    { name: 'Eclipse', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6692.png' } ,
    { name: 'Edge of Night', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3814.png' } ,
    { name: 'Essence Reaver', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3508.png' } ,
    { name: 'Experimental Hexplate', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3073.png' } ,
    { name: 'Fimbulwinter', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3121.png' } ,
    { name: 'Force of Nature', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/4401.png' } ,
    { name: 'Frozen Heart', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3110.png' } ,
    { name: 'Guardian Angel', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3026.png' } ,
    { name: 'Guinsoos Rageblade', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3124.png' } ,
    { name: 'Heartsteel', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3084.png' } ,
    { name: 'Hextech Rocketbelt', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3152.png' } ,
    { name: 'Hollow Radiance', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6664.png' } ,
    { name: 'Horizon Focus', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/4628.png' } ,
    { name: 'Hubris', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6697.png' } ,
    { name: 'Hullbreaker', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3181.png' } ,
    { name: 'Iceborn Gauntlet', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6662.png' } ,
    { name: 'Immortal Shieldbow', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6673.png' } ,
    { name: 'Imperial Mandate', place: 'Item', playstyle: 'AP', playstyle2: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/4005.png' } ,
    { name: 'Infinity Edge', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3031.png' } ,
    { name: 'JakSho, The Protean', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6665.png' } ,
    { name: 'Kaenic Rookern', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/2504.png' } ,
    { name: 'Knights Vow', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3109.png' } ,
    { name: 'Kraken Slayer', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6672.png' } ,
    { name: 'Liandrys Torment', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6653.png' } ,
    { name: 'Lich Bane', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3100.png' } ,
    { name: 'Locket of the Iron Solari', place: 'Item', playstyle: 'Tank', playstyle2: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3190.png'  } ,
    { name: 'Lord Dominiks Regards', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3036.png' } ,
    { name: 'Ludens Companion', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6655.png' } ,
    { name: 'Malignance', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3118.png' } ,
    { name: 'Manamune', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3004.png' } ,
    { name: 'Maw of Malmortius', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3156.png' } ,
    { name: 'Mejais Soulstealer', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3041.png' } ,
    { name: 'Mercurial Scimitar', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3139.png' } ,
    { name: 'Mikaels Blessing', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3222.png' } ,
    { name: 'Moonstone Renewer', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6617.png' } ,
    { name: 'Morellonomicon', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3165.png' } ,
    { name: 'Mortal Reminder', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3033.png' } ,
    { name: 'Nashors Tooth', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3115.png' } ,
    { name: 'Navori Flickerblade', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6675.png' } ,
    { name: 'Opportunity', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6701.png' } ,
    { name: 'Overlords Bloodmail', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/2501.png' } ,
    { name: 'Phantom Dancer', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3046.png' } ,
    { name: 'Profane Hydra', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6698.png' } ,
    { name: 'Rabadons Deathcap', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3089.png' } ,
    { name: 'Randuins Omen', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3143.png' } ,
    { name: 'Rapid Firecannon', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3094.png' } ,
    { name: 'Ravenous Hydra', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3074.png' } ,
    { name: 'Redemption', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3107.png' } ,
    { name: 'Riftmaker', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/4633.png' } ,
    { name: 'Rod of Ages', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6657.png' } ,
    { name: 'Runaans Hurricane', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3085.png' } ,
    { name: 'Rylays Crystal Scepter', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3116.png' } ,
    { name: 'Seraphs Embrace', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3040.png' } ,
    { name: 'Serpents Fang', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6695.png' } ,
    { name: 'Seryldas Grudge', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6694.png' } ,
    { name: 'Shadowflame', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/4645.png' } ,
    { name: 'Shurelyas Battlesong', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/2065.png' } ,
    { name: 'Solstice Sleigh', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3876.png' } ,
    { name: 'Spear of Shojin', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3161.png' } ,
    { name: 'Spirit Visage', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3065.png' } ,
    { name: 'Staff of Flowing Water', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6616.png' } ,
    { name: 'Statikk Shiv', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3087.png' } ,
    { name: 'Steraks Gage', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3053.png' } ,
    { name: 'Stormsurge', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/4646.png' } ,
    { name: 'Stridebreaker', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6631.png' } ,
    { name: 'Sundered Sky', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6610.png' } ,
    { name: 'Sunfire Aegis', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3068.png' } ,
    { name: 'Terminus', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3302.png' } ,
    { name: 'The Collector', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6676.png' } ,
    { name: 'Thornmail', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3075.png' } ,
    { name: 'Titanic Hydra', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3748.png' } ,
    { name: 'Trailblazer', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3002.png' },
    { name: 'Trinity Force', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3078.png' },
    { name: 'Umbral Glaive', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3179.png' },
    { name: 'Unending Despair', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/2502.png' },
    { name: 'Vigilant Wardstone', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/4643.png' },
    { name: 'Void Staff', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3135.png' },
    { name: 'Voltaic Cyclosword', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/6699.png' },
    { name: 'Warmogs Armor', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3083.png' },
    { name: 'Winters Approach', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3119.png' },
    { name: 'Wits End', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3091.png' },
    { name: 'Youmuus Ghostblade', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3142.png' },
    { name: 'Yun Tal Wildarrows', place: 'Item', playstyle: 'AD', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3032.png' },
    { name: 'ZazZaks Realmspike', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3871.png' },
    { name: 'Zekes Convergence', place: 'Item', playstyle: 'Tank', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3050.png' },
    { name: 'Zhonyas Hourglass', place: 'Item', playstyle: 'AP', image: 'https://static.bigbrain.gg/assets/lol/riot_static/15.6.1/img/item/3157.png' }
];

let selectedRole = null;
let selectedLane = null;
let selectedPlaystyle = null;
let currentChampion = null;
let selectedItems = [];

document.addEventListener('DOMContentLoaded', () => {
  const rolesButton = document.querySelector('#roles-dropdown').previousElementSibling;
  const lanesButton = document.querySelector('#lanes-dropdown').previousElementSibling;
  const playstyleButton = document.querySelector('#playstyle-dropdown').previousElementSibling;
  const rerollChampionButton = document.getElementById('reroll-champion');
  const rerollItemsButton = document.getElementById('reroll-items');

  console.log('DOM loaded, attaching event listeners');

  rolesButton.addEventListener('click', () => toggleDropdown('roles-dropdown'));
  lanesButton.addEventListener('click', () => toggleDropdown('lanes-dropdown'));
  playstyleButton.addEventListener('click', () => toggleDropdown('playstyle-dropdown'));
  rerollChampionButton.addEventListener('click', rerollChampion);
  rerollItemsButton.addEventListener('click', rerollItems);

  document.querySelectorAll('#roles-dropdown a').forEach(link => {
    link.addEventListener('click', e => selectFilter(e, 'role', rolesButton));
  });
  document.querySelectorAll('#lanes-dropdown a').forEach(link => {
    link.addEventListener('click', e => selectFilter(e, 'lane', lanesButton));
  });
  document.querySelectorAll('#playstyle-dropdown a').forEach(link => {
    link.addEventListener('click', e => selectFilter(e, 'playstyle', playstyleButton));
  });

  document.addEventListener('click', e => {
    if (!e.target.matches('.dropbtn')) {
      document.querySelectorAll('.dropdown-content.show').forEach(dropdown => {
        dropdown.classList.remove('show');
      });
    }
  });

  if (!Array.isArray(champions) || champions.length === 0) {
    console.error("Champions list is not defined or empty!");
  } else {
    console.log("Champions list loaded with", champions.length, "entries");
  }

  const urlParams = new URLSearchParams(window.location.search);
  const championName = urlParams.get('champion');
  if (championName) {
    const champion = champions.find(champ => champ.name === championName);
    if (champion) {
      currentChampion = champion;
      document.getElementById('random-image').src = champion.image;
      document.getElementById('champion-name').textContent = champion.name;
      updateShareLink();
    }
  }

  rerollChampion();
  rerollItems();
});

function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle('show');
}

function selectFilter(event, type, button) {
  event.preventDefault();
  const value = event.target.dataset[type];
  if (type === 'role') {
    selectedRole = value === 'everything' ? null : value;
    button.textContent = value === 'everything' ? 'Roles' : value;
  } else if (type === 'lane') {
    selectedLane = value === 'everything' ? null : value;
    button.textContent = value === 'everything' ? 'Lane' : (value === 'Bot' ? 'Botlane' : value);
  } else if (type === 'playstyle') {
    selectedPlaystyle = value === 'everything' ? null : value;
    button.textContent = value === 'everything' ? 'Playstyle' : value;
    console.log('Selected playstyle:', selectedPlaystyle);
  }
}

function rerollChampion() {
  if (!Array.isArray(champions) || champions.length === 0) {
    console.error("Cannot reroll: Champions list is undefined or empty");
    const imageElement = document.getElementById('random-image');
    const nameElement = document.getElementById('champion-name');
    imageElement.src = 'https://i.imgur.com/d7tDZ0t.jpeg';
    imageElement.alt = 'Error';
    nameElement.textContent = 'Error: No Champions Available';
    return;
  }

  let filteredChampions = [...champions];

  if (selectedRole) {
    filteredChampions = filteredChampions.filter(champ => champ.role === selectedRole);
  }

  if (selectedLane) {
    if (selectedLane === 'Bot') {
      filteredChampions = filteredChampions.filter(champ => champ.lane === 'Bot' || champ.lane === 'Support');
    } else {
      filteredChampions = filteredChampions.filter(champ => champ.lane === selectedLane);
    }
  }

  const imageElement = document.getElementById('random-image');
  const nameElement = document.getElementById('champion-name');

  if (filteredChampions.length > 0) {
    const randomChampion = filteredChampions[Math.floor(Math.random() * filteredChampions.length)];
    if (!randomChampion || !randomChampion.image || !randomChampion.name) {
      console.error("Invalid champion data:", randomChampion);
      imageElement.src = 'https://i.imgur.com/d7tDZ0t.jpeg';
      imageElement.alt = 'Error';
      nameElement.textContent = 'Error: Invalid Champion';
      return;
    }
    imageElement.src = randomChampion.image;
    imageElement.alt = randomChampion.name;
    nameElement.textContent = randomChampion.name;
    imageElement.style.transform = 'scale(0.9)';
    setTimeout(() => imageElement.style.transform = 'scale(1)', 500);
    currentChampion = randomChampion;
    updateShareLink();
  } else {
    imageElement.src = 'https://i.imgur.com/d7tDZ0t.jpeg';
    imageElement.alt = 'No Champion Found';
    nameElement.textContent = 'No match found';
    currentChampion = null;
    updateShareLink();
  }
}

function updateShareLink() {
  const shareLinkInput = document.getElementById('share-link');
  if (currentChampion) {
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?champion=${encodeURIComponent(currentChampion.name)}`;
    shareLinkInput.value = shareUrl;
  } else {
    shareLinkInput.value = 'No champion selected yet';
  }
}

function copyShareLink() {
  const shareLinkInput = document.getElementById('share-link');
  shareLinkInput.select();
  navigator.clipboard.writeText(shareLinkInput.value)
    .then(() => alert('Link copied to clipboard!'))
    .catch(err => {
      console.error('Failed to copy link:', err);
      alert('Failed to copy link. Please copy it manually.');
    });
}

function rerollItems() {
  console.log('Rerolling items, selected playstyle:', selectedPlaystyle);

  if (!Array.isArray(items) || items.length === 0) {
    console.error('Items array is empty or undefined');
    return;
  }

  let filteredBoots = items.filter(item => item.place === 'Boot');
  let filteredItems = items.filter(item => item.place === 'Item');

  if (selectedPlaystyle) {
    filteredBoots = filteredBoots.filter(item => 
      item.playstyle === selectedPlaystyle || 
      item.playstyle2 === selectedPlaystyle || 
      item.playstyle3 === selectedPlaystyle
    );
    filteredItems = filteredItems.filter(item => 
      item.playstyle === selectedPlaystyle || 
      item.playstyle2 === selectedPlaystyle || 
      item.playstyle3 === selectedPlaystyle
    );
    console.log('Filtered boots:', filteredBoots.length, 'Filtered items:', filteredItems.length);
  } else {
    console.log('No playstyle filter, using all items');
  }

  selectedItems = [];

  const bootSlot = document.getElementById('bootSlot');
  if (!bootSlot) {
    console.error('Boot slot not found in DOM');
    return;
  }
  const bootImg = bootSlot.querySelector('img');
  const bootSpan = bootSlot.querySelector('span');
  if (filteredBoots.length > 0) {
    const randomBoot = filteredBoots[Math.floor(Math.random() * filteredBoots.length)];
    console.log('Selected boot:', randomBoot.name, randomBoot.image);
    bootImg.src = randomBoot.image;
    bootImg.alt = randomBoot.name;
    bootSpan.textContent = randomBoot.name;
    bootSpan.style.display = 'none';
    bootImg.style.display = 'block';
    selectedItems.push(randomBoot);
  } else {
    console.log('No boots available for selected playstyle');
    bootImg.src = 'https://i.imgur.com/bNdKwD5.png';
    bootImg.alt = 'No Boot';
    bootSpan.textContent = 'No Boot';
    bootSpan.style.display = 'block';
    bootImg.style.display = 'none';
  }

  const itemSlots = ['itemSlot1', 'itemSlot2', 'itemSlot3', 'itemSlot4', 'itemSlot5'];
  let availableItems = [...filteredItems];

  itemSlots.forEach(slotId => {
    const slot = document.getElementById(slotId);
    if (!slot) {
      console.error(`Item slot ${slotId} not found in DOM`);
      return;
    }
    const img = slot.querySelector('img');
    const span = slot.querySelector('span');
    if (availableItems.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableItems.length);
      const randomItem = availableItems[randomIndex];
      console.log('Selected item for', slotId, ':', randomItem.name, randomItem.image);
      img.src = randomItem.image;
      img.alt = randomItem.name;
      span.textContent = randomItem.name;
      span.style.display = 'none';
      img.style.display = 'block';
      selectedItems.push(randomItem);
      availableItems.splice(randomIndex, 1);
    } else {
      console.log('No more items available for', slotId);
      img.src = 'https://i.imgur.com/bNdKwD5.png';
      img.alt = 'No Item';
      span.textContent = 'No Item';
      span.style.display = 'block';
      img.style.display = 'none';
    }
  });
}
