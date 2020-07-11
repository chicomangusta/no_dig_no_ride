# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Bike.create([
    {
        "brand"      : "Intense",
        "name"       : "Recluse"
        "size"       : 'XL',
        "type"       : 'All-Mtn',
        "suspension" : 'Rock Shox Lyrik 160mm',
        "shox"       : 'Rock Shox Vivid Coil 140mm',
        "wheel_size" : '27.5',
        "rear_der"   : 'SRAM Eagle GX',
        "dropper"    : 'X-Fusion Mannic',
        "year"       :  2018
    },
    {
        "brand"      : "Cannondale",
        "name"       : "Topstone"
        "size"       : 'L',
        "type"       : 'Gravel',
        "suspension" : 'Rigid',
        "shox"       : 'none',
        "wheel_size" : '700C',
        "rear_der"   : 'Shimano 105',
        "dropper"    : 'none',
        "year"       :  2020
    },
    {
        "brand"      : "Cannondale",
        "name"       : "CAAD 12"
        "size"       : '58',
        "type"       : 'Road',
        "suspension" : 'none',
        "shox"       : 'none',
        "wheel_size" : '700C',
        "rear_der"   : 'SRAM Red',
        "dropper"    : 'none',
        "year"       :  2017
    }, 
    {
        "brand"      : "Commencal",
        "name"       : "Clash"
        "size"       : 'XL',
        "type"       : 'Free-Ride, Park',
        "suspension" : 'Rock Shox ZEB 190mm',
        "shox"       : 'Rock Shox Vivid Coil 170mm',
        "wheel_size" : '27.5',
        "rear_der"   : 'BOX ONE',
        "dropper"    : 'One-Up',
        "year"       :  2021
    }, 
    {
        "brand"      : "Commencal",
        "name"       : "Meta AM HT"
        "size"       : 'XL',
        "type"       : 'Enduro',
        "suspension" : 'Rock Shox Lyrik 160mm',
        "shox"       : 'Hard-Tail',
        "wheel_size" : '29er',
        "rear_der"   : 'SRAM Eagle GX',
        "dropper"    : 'X-Fusion Mannic',
        "year"       :  2020
    }
])



