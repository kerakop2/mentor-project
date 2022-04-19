// начало 1
import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Container,
} from "@mui/material";
import { adminContext } from "../context/AdminContext";

const AddProductPage = () => {
  const data = React.useContext(adminContext);
  const { addProduct } = data;

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    color: "",
    size: "",
  });

  const handleSubmit = (event) => {
    // не обновляет страницу
    event.preventDefault();

    // не добавляет пустые строки || не пропускает пустые строки
    for (let key in newProduct) {
      let value = newProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля");
          return;
        }
      }
    }

    // Добавляет в database
    addProduct(newProduct);

    // очищаем инпуты
    setNewProduct({
      name: "",
      description: "",
      price: "",
      image: "",
      color: "",
      size: "",
    });
  };

  return (
    <Container>
      <div className="add-edit-page">
        <h2>Добавить товар</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
            label="Введите название"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            value={newProduct.description}
            label="Введите описание"
            variant="standard"
          />
          <TextField
            type="number"
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: parseInt(e.target.value) })
            }
            value={newProduct.price}
            label="Введите цену"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
            label="Введите фото"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel id="color-select-label">Выберите цвет</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, color: e.target.value })
              }
              value={newProduct.color}
              label="Выберите цвет"
              labelId="color-select-label"
            >
              <MenuItem value="black">Чёрный</MenuItem>
              <MenuItem value="white">Белый</MenuItem>
              <MenuItem value="blue">Синий</MenuItem>
              <MenuItem value="pink">Розовый</MenuItem>
              <MenuItem value="yellow">Жёлтый</MenuItem>
              <MenuItem value="red">Красный</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel id="size-select-label">Выберите размер</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, size: e.target.value })
              }
              value={newProduct.size}
              label="Выберите размер"
              labelId="size-select-label"
            >
              <MenuItem value="s">SMALL</MenuItem>
              <MenuItem value="m">MIDDLE</MenuItem>
              <MenuItem value="l">LARGE</MenuItem>
              <MenuItem value="xl">EXTRA LARGE</MenuItem>
              <MenuItem value="xxl">XX LARGE</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="outlined">
            Добавить
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default AddProductPage;
