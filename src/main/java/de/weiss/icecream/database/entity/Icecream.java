package de.weiss.icecream.database.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import java.util.List;
import javax.persistence.CollectionTable;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "category")
@JsonSubTypes({
    @JsonSubTypes.Type(value = CreamIce.class, name = "CREAM"),
    @JsonSubTypes.Type(value = FruitIce.class, name = "FRUIT"),
    @JsonSubTypes.Type(value = WaterIce.class, name = "WATER")}
)
@Inheritance
@Entity
public abstract class Icecream {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @JsonProperty(required = false)
  private Integer id;

  @Enumerated(EnumType.STRING)
  private Category category;

  private String name;
  private Integer calories;
  private String intolerances;
  private double wholesalePrice;
  private double retailPrice;

  @ElementCollection
  @CollectionTable(name = "ingredients")
  private List<String> ingredients;

  protected Icecream(Integer id, String name, Integer calories, String intolerances,
      double wholesalePrice, double retailPrice, List<String> ingredients, Category category) {
    this.id = id;
    this.name = name;
    this.calories = calories;
    this.intolerances = intolerances;
    this.wholesalePrice = wholesalePrice;
    this.retailPrice = retailPrice;
    this.ingredients = ingredients;
    this.category = category;
  }

  public Icecream() {
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Category getCategory() {
    return category;
  }

  public void setCategory(Category category) {
    this.category = category;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getCalories() {
    return calories;
  }

  public void setCalories(Integer calories) {
    this.calories = calories;
  }

  public String getIntolerances() {
    return intolerances;
  }

  public void setIntolerances(String intolerances) {
    this.intolerances = intolerances;
  }

  public double getWholesalePrice() {
    return wholesalePrice;
  }

  public void setWholesalePrice(double wholesalePrice) {
    this.wholesalePrice = wholesalePrice;
  }

  public double getRetailPrice() {
    return retailPrice;
  }

  public void setRetailPrice(double retailPrice) {
    this.retailPrice = retailPrice;
  }

  public List<String> getIngredients() {
    return ingredients;
  }

  public void setIngredients(List<String> ingredients) {
    this.ingredients = ingredients;
  }
}
